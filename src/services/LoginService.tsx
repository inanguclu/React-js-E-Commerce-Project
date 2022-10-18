import { IJwt } from "../models/IJwt"
import { IUser } from "../models/IUser"
import { IUserList } from "../models/IUserList"
import { siteConfig, userConfig } from "../configs"


export const userLogin = ( username: string, password: string ) => {
    const sendData = {
        username: username,
        password: password
    }
    return userConfig.post<IJwt>('user/auth', sendData)
}
