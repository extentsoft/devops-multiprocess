# Extentsoft DevOps Multiprocess Sample

![alt text](https://api.travis-ci.org/extentsoft/devops-multiprocess.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/extentsoft/devops-multiprocess/badge.svg?branch=master)](https://coveralls.io/github/extentsoft/devops-multiprocess?branch=master)

# References
1. [Basic Travis-Github](https://github.com/dwyl/learn-travis)
2. [Travis Configuration](https://docs.travis-ci.com/user/customizing-the-build)
3. [Environment Variable](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html)
4. [Markdown Document](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links)
5. [Loopback+Express](http://loopback.io/doc/en/lb3/Add-a-custom-Express-route.html)
6. [Express+Travis](https://github.com/expressjs/express)
7. [Coveralls+Nodejs](https://github.com/nickmerwin/node-coveralls)(https://github.com/istanbuljs/nyc)
8. 


# Modules
1. [NSP - Vulnerability Scanning](https://www.npmjs.com/package/nsp)


# Coverall
`
nyc npm test
export COVERALLS_REPO_TOKEN=bCR55184qbEspsWrLiuDu5Jfb38IPwa1p
echo $COVERALLS_REPO_TOKEN
nyc npm test && nyc report --reporter=text-lcov | ./node_modules/coveralls/bin/coveralls.js
`