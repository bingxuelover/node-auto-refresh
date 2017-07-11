#说明

作为前端开发做静态页面的时候，需要不停的刷新页面，这个项目就是为了在修改的时候自动刷新页面，自动将less文件生成css文件。
有些情况下，由于ajax书写方式的原因，server方式启动的3000服务不能正常显示，所以start方式启动的3000手动刷新服务器作为备选。

#使用方法

##安装 npm install

##运行 npm start
启动 http://localhost:3000/ 端口的服务器，运行的是public文件集里的静态页面

##运行 npm run server
启动 http://localhost:3000/ 端口的服务器，运行的是public文件集里的静态页面；
1. public 文件夹里的文件修改，包括html、css、js都会自动刷新页面

##运行 npm run less
less文件夹里的less文件修改保存后，会自动生成压缩后的同名css文件到css文件夹中

##运行 npm run build
启动 http://localhost:3000/ 端口的服务器，运行的是public文件集里的静态页面；
1. public 文件夹里的文件修改，包括html、css、js都会自动刷新页面
2. less文件夹里的less文件修改保存后，会自动生成压缩后的同名css文件到css文件夹中
