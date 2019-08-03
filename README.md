# store5

## 开发

```bash
# 安装依赖
$ npm i
$ npx lerna bootstrap

# 启动自动构建服务
$ npx lerna run --scope store5 dev
# 启动web服务
$ npx lerna run --scope store5-example dev
# 打开测试页面
$ npx lerna run --scope store5-example open
```

## 构建

```bash
$ npx lerna run build
```

## 静态语法检查

```bash
$ npm run eslint
```

## 查看更改

```bash
$ npx lerna changed
```

## 发布

```bash
$ npx lerna publich
```
