---
layout: post
author: skohan
date: 2022-02-25
category: posts
excerpt: Steps to install docker on ubuntu linux
---

# Docker Installation

[Reference](https://docs.docker.com/engine/install/ubuntu/)

### System used
```bash
$ uname -ra
Linux 5.11.0-27-generic #29~20.04.1-Ubuntu SMP Wed Aug 11 15:58:17 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux 
```
Shell: Bash


### Get the script to install stable version of docker
Download script
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
```

Make it executable and run it
```bash
chmod +x get-docker.sh 
./get-docker.sh
```

After installation docker is installed as root. If you need to chang it as rootless, execute this after above script
```bash
dockerd-rootless-setuptool.sh install
```
It might show some missing dependencies, install it through given command in output of above command and run it again
```bash
sudo apt-get install -y uidmap 

dockerd-rootless-setuptool.sh install
```


Update the environment variables or put it in your `.bashrc`. Makae sure the following environment variables are set
```bash
export PATH=/usr/bin:$PATH 
export DOCKER_HOST=unix:///run/user/1001/docker.sock 
```