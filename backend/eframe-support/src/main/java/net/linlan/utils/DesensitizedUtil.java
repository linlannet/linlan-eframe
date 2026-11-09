/*
 * eframe-support - frame支撑模块
 * Copyright © 2020-2025 Linlan (open@linlan.net)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package net.linlan.utils;

import net.linlan.commons.core.StringUtils;

/**
 * 脱敏工具类
 *
 * @author Linlan
 */
public class DesensitizedUtil {
    /**
     * 密码的全部字符都用*代替，比如：******
     *
     * @param password 密码
     * @return 脱敏后的密码
     */
    public static String password(String password) {
        if (StringUtils.isBlank(password)) {
            return StringUtils.EMPTY;
        }
        return StringUtils.repeat('*', password.length());
    }

    /**
     * 车牌中间用*代替，如果是错误的车牌，不处理
     *
     * @param carLicense 完整的车牌号
     * @return 脱敏后的车牌
     */
    public static String carLicense(String carLicense) {
        if (StringUtils.isBlank(carLicense)) {
            return StringUtils.EMPTY;
        }
        // 普通车牌
        if (carLicense.length() == 7) {
            carLicense = StringUtils.hide(carLicense, 3, 6);
        } else if (carLicense.length() == 8) {
            // 新能源车牌
            carLicense = StringUtils.hide(carLicense, 3, 7);
        }
        return carLicense;
    }

    /**
     * 姓名脱敏，第2位星号替换，比如：张*三丰
     *
     * @param username 姓名
     * @return 脱敏后的姓名
     */
    public static String username(String username) {
        if (StringUtils.isBlank(username)) {
            return StringUtils.EMPTY;
        }
        return username.replaceAll("(\\S)\\S(\\S*)", "$1*$2");
    }

    /**
     * 身份证脱敏，中间10位星号替换，比如：1101** **** ****1234
     *
     * @param idCard 身份证号
     * @return 脱敏后的身份证号
     */
    public static String idCard(String idCard) {
        if (StringUtils.isBlank(idCard)) {
            return StringUtils.EMPTY;
        }
        return idCard.replaceAll("(\\d{4})\\d{10}(\\d{3}[Xx]|\\d{4})", "$1** **** ****$2");
    }

    /**
     * 手机号脱敏，中间4位星号替换，比如：138****8888
     *
     * @param phone 手机号
     * @return 脱敏后的手机号
     */
    public static String phone(String phone) {
        if (StringUtils.isBlank(phone)) {
            return StringUtils.EMPTY;
        }
        return phone.replaceAll("(\\d{3})\\d{4}(\\d{4})", "$1****$2");
    }

    /**
     * 电子邮箱脱敏，仅显示第一个字母和@后面的地址，其他星号替换，比如：a****@linlan.net
     *
     * @param email 电子邮箱
     * @return 脱敏后的电子邮箱
     */
    public static String email(String email) {
        if (StringUtils.isBlank(email)) {
            return StringUtils.EMPTY;
        }
        return email.replaceAll("(^.)[^@]*(@.*$)", "$1****$2");
    }

    /**
     * 银行卡号脱敏，保留最后3位，其他星号替换，比如：**** **** **** **** 234
     *
     * @param bankCard 银行卡号
     * @return 脱敏后的银行卡号
     */
    public static String bankCard(String bankCard) {
        if (StringUtils.isBlank(bankCard)) {
            return StringUtils.EMPTY;
        }
        return bankCard.replaceAll("\\d{15}(\\d{3})", "**** **** **** **** $1");
    }
}
