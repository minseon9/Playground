# Ngrok
Ngrok은 Reverse Proxy로 앱 앞단에서 여러가지 역할을 하는 프로그램이다.  
[v1](https://github.com/inconshreveable/ngrok?tab=readme-ov-file)은 더 이상 유지보수 하지 않으며, [프로덕션](https://ngrok.com/)으로 제공하고 있다.  

여기에서는 외부에서 로컬로 쉽게 접속할 수 있도록 하는 **tunneling tool**로만 사용할 예정이다.

---

## Installation

```shell
# MacOS
brew install ngrok

# Docker
docker run -it -e ngrok/ngrok http 80
```


## How To Use

Ngrok을 사용하기 전에 계정 가입 후, 아래 command로 config에 토큰을 넣어주어야 한다.
### Add Authentication Token
```shell
ngrok config add-authtoken ${token}
```

### Check configuration 
자세한 configuration은 [여기](https://ngrok.com/docs/agent/config/#metadata)서 확인

```shell
# check configuration location
ngrok config check
```
- Linux: `~/.config/ngrok/ngrok.yml`
- MacOS (Darwin): `~/Library/Application Support/ngrok/ngrok.yml`

`## Useful Command
```shell
# simply run application
ngork http ${endpoint}


# run from specific configuration
# if option is not provided, getting config from default path
ngrok http --config ${configuration file name}

# run specific tunnel from configuration
# tunnel should be defined configuration tunnel section
ngrok start ${tunnel name}
```