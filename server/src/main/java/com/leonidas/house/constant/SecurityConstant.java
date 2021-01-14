package com.leonidas.house.constant;

public class SecurityConstant {

    public static final long EXPIRATION_TIME = 432000000;    // 5 DAYS
    public static final String TOKEN_HEADER = "Bearer "; // Bearer means that they have ownership og this token and no further authorization needs to be donne
    public static final String JWT_TOKEN_HEADER = "Jwt-Token";
    public static final String TOKEN_CANNOT_BE_VERIFIED = "Token cannot be verified";
    public static final String GET_ARRAYS_LLC = "GET ARRAYS LLC";
    public static final String GET_ARRAYS_ADMINISTRATION = "User management portal";
    public static final String AUTHORITIES = "Authorities";
    public static final String FORBIDDEN_MESSAGE = "You need to log in to access this page";
    public static final String ACCESS_DENIED_MESSAGE = "You do not have permission to access this page";
    public static final String OPTIONS_HTTP_METHOD = "OPTIONS";
    public static final String[] PUBLIC_URLS = { "/user/login", "user/register", "/user/resetpassword/**", "/user/image/**"};
}
