import axios from 'axios'


// login  登录接口
export async function logins(username: string, password: string | null) {
    console.log(username, password);

    let res = await axios({ method: "GET", url: "http://localhost:3000/login", params: { username, password } })
    return res.data
}
