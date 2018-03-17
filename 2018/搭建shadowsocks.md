### shadowsocks 服务器安装

#### 更新软件源

```sudo apt-get update```

#### 然后安装 PIP 环境

```sudo apt-get install python-pip```

#### 直接安装 shadowsocks

```sudo pip install shadowsocks```

#### 直接运行 shadowsocks 服务器

启动命令如下：如果要停止运行，将命令中的start改成stop。

```sudo ssserver -p 8388 -k password -m rc4-md5 -d start```

#### 使用配置文件运行
创建/etc/shadowsocks.json文件，填入如下内容：

```
{
    "server":"my_server_ip",
    "server_port":8388,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"mypassword",
    "timeout":300,
    "method":"rc4-md5"
}
```

|  字段	  |  含义 |
| ------ | ----- |
|server	| 服务器 IP (IPv4/IPv6)，注意这也将是服务端监听的 IP 地址|
|server_port	| 服务器端口|
|local_port	| 本地端端口|
|password	| 用来加密的密码|
|timeout	| 超时时间（秒）|
|method	| 加密方法，可选择 “bf-cfb”, “aes-256-cfb”, “des-cfb”, “rc4″, 等等。|


#### 配置多个用户
只需要将配置文件修改为

``` 
{
    "server":"my_server_ip",
    "port_password": {
        "端口1": "密码1",
        "端口2": "密码2"
    },
    "timeout":300,
    "method":"rc4-md5",
    "fast_open": false
}
```
  
### 创建完毕后，赋予文件权限

```sudo chmod 755 /etc/shadowsocks.json```

为了支持这些加密方式，你要需要安装

```sudo apt–get install python–m2crypto```

#### 在后台运行：

sudo ssserver -c /etc/shadowsocks.json -d start
