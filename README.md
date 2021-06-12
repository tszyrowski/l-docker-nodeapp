# l-docker-nodeapp
A node app example runing on docker 

## l-1: Create a simple node app for docker 
The app create runs basic application from docker 
To run:

    $ docker run --rm -p 2222:9999 -d nodeapp

It spin up container accsessible on port 2222

## l-2: Add path for load balancer
The app get functionality for runnig with different path and showing the ID  
https://www.youtube.com/watch?v=9sAg7RooEDc&list=PLQnljOFTspQWsD-rakNw1C20c1JI8UR1r&index=16

Running all containers allows accessing host:2222 to host:5555

t@digitalreef:~/work_train$ docker run --rm -p 5555:9999 -e APPID=5555 -d nodeapp
831d330191172820fcaf36e07d2065c1d62ad1968cbdab773256fa35668254d5
t@digitalreef:~/work_train$ docker run --rm -p 4444:9999 -e APPID=4444 -d nodeapp
8847e5ed7b9093cd7bc240d241bbb5db12674afc3ba1d6037b22de5d1fc2c7db
t@digitalreef:~/work_train$ docker run --rm -p 3333:9999 -e APPID=3333 -d nodeapp
a05c84ff55307eb4ad54d2a10e3fea13e98cc6f38f3475eb770a56fc8143540c
t@digitalreef:~/work_train$ docker run --rm -p 2222:9999 -e APPID=2222 -d nodeapp
42caad136bc47b7e3176519537df7249fa3144b3725105c4044b97aabe400a6e


