import { environment } from "src/environments/environment"

/**
 * Helper class for build the routes needed for the API requests
 */
export class ApiRoutes {
    private static USERS_PREFIX = '/users'
    private static USER_ME_ROUTE = '/me'


    private static AUTH_PREFIX = '/auth'
    private static AUTH_LOGIN_ROUTE = '/login'
    private static AUTH_LOGOUT_ROUTE = '/logout'

    private static TASK_PREFIX = '/tasks'

    private static TYPE_PREFIX = '/types'


    
    /**
     *   USER ROUTES 
     */

    public static getUserMeRoute() {
        return ApiRoutes.getAPIHostRoute() + ApiRoutes.USERS_PREFIX + ApiRoutes.USER_ME_ROUTE;
    }

    
    /**
     *   AUTH ROUTES 
     */

    public static getAuthLoginRoute() {
        return ApiRoutes.getAPIHostRoute() + ApiRoutes.AUTH_PREFIX + ApiRoutes.AUTH_LOGIN_ROUTE;
    }

    public static getAuthLogoutRoute() {
        return ApiRoutes.getAPIHostRoute() + ApiRoutes.AUTH_PREFIX + ApiRoutes.AUTH_LOGOUT_ROUTE;
    }
    
    
    /**
     *   TASK ROUTES 
     */

    public static getListTaskRoute() {
        return ApiRoutes.getAPIHostRoute() + ApiRoutes.TASK_PREFIX;
    }
    
    public static getStoreTaskRoute() {
        return ApiRoutes.getAPIHostRoute() + ApiRoutes.TASK_PREFIX;
    }

    public static getUpdateTaskRoute(taskId: number) {
        return ApiRoutes.getAPIHostRoute() + ApiRoutes.TASK_PREFIX + '/' + taskId.toString();
    }

    public static getDeleteTaskRoute(taskId: number) {
        return ApiRoutes.getAPIHostRoute() + ApiRoutes.TASK_PREFIX + '/' + taskId.toString();
    }

    /**
     *   TYPE ROUTES 
     */
    
    public static getListTypeRoute() {
        return ApiRoutes.getAPIHostRoute() + ApiRoutes.TYPE_PREFIX;
    }

    private static getAPIHostRoute(): string {
        return environment.host + environment.api_version
    }
}
