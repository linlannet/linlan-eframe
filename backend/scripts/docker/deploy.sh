#!/bin/bash

set -e

APP_NAME="eframe"
DOCKER_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$DOCKER_DIR/../.." && pwd)"
IMAGE_NAME="eframe-web:latest"

print_info() {
    echo -e "\033[34m[INFO] $1\033[0m"
}

print_success() {
    echo -e "\033[32m[SUCCESS] $1\033[0m"
}

print_error() {
    echo -e "\033[31m[ERROR] $1\033[0m"
}

check_command() {
    if ! command -v "$1" &> /dev/null; then
        print_error "$1 未安装，请先安装 $1"
        exit 1
    fi
}

build_project() {
    print_info "开始构建项目..."
    cd "$PROJECT_ROOT"
    
    if [ ! -f "eframe-web/target/eframe-web.jar" ]; then
        print_info "项目未构建，执行 Maven 构建..."
        mvn clean package -DskipTests
    else
        print_info "检测到已构建的 JAR 文件，跳过构建步骤..."
    fi
    
    print_success "项目构建完成"
}

build_docker_image() {
    print_info "开始构建 Docker 镜像..."
    cd "$DOCKER_DIR"
    
    docker build -t "$IMAGE_NAME" -f Dockerfile ../..
    
    print_success "Docker 镜像构建完成"
}

start_services() {
    print_info "开始启动服务..."
    cd "$DOCKER_DIR"
    
    docker-compose up -d
    
    print_success "服务启动完成"
}

stop_services() {
    print_info "开始停止服务..."
    cd "$DOCKER_DIR"
    
    docker-compose down
    
    print_success "服务停止完成"
}

show_status() {
    print_info "查看服务状态..."
    cd "$DOCKER_DIR"
    
    docker-compose ps
    
    print_info "查看服务日志..."
    docker-compose logs --tail=50 eframe-web
}

clean_env() {
    print_info "开始清理环境..."
    cd "$DOCKER_DIR"
    
    docker-compose down -v
    docker rmi -f "$IMAGE_NAME" 2>/dev/null || true
    
    print_success "环境清理完成"
}

print_usage() {
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  build          构建项目和 Docker 镜像"
    echo "  up             启动所有服务（包含构建）"
    echo "  down           停止所有服务"
    echo "  restart        重启所有服务"
    echo "  status         查看服务状态"
    echo "  clean          清理环境（删除容器、镜像和数据卷）"
    echo "  help           显示此帮助信息"
    echo ""
    echo "示例:"
    echo "  $0 up          # 一键部署并启动服务"
    echo "  $0 restart     # 重启服务"
    echo "  $0 status      # 查看服务状态"
}

main() {
    check_command docker
    check_command docker-compose
    check_command mvn
    
    case "$1" in
        build)
            build_project
            build_docker_image
            ;;
        up)
            build_project
            build_docker_image
            start_services
            sleep 10
            show_status
            ;;
        down)
            stop_services
            ;;
        restart)
            stop_services
            start_services
            sleep 10
            show_status
            ;;
        status)
            show_status
            ;;
        clean)
            clean_env
            ;;
        help|--help|-h)
            print_usage
            ;;
        *)
            print_error "未知命令: $1"
            print_usage
            exit 1
            ;;
    esac
}

if [ $# -eq 0 ]; then
    print_usage
    exit 1
fi

main "$@"