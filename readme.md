# Hexo 腾讯云CDN主动刷新插件

这是一个Hexo使用腾讯云CDN自动刷新的插件，使用腾讯云COS部署网站，经常会出现提交完成后，CDN迟迟不刷新问题，固写次插件配合使用。

详细使用教程请参考[这篇文章](https://www.techeek.cn/hexo-deploy-tencentcloud-cdn)。

## 安装方法

和你平常安装插件方法一样，使用下面的命令即可安装本插件。

```
npm install hexo-deploy-tencentcloud-cdn --save
```

## 配置 _config.yml

本插件配置依赖Hexo根目录下`_config.yml`配置文件，需要插入下面的配置才可生效。

```
deploy:
- type: tencent_cdn

tencentcdn:
  secretId: 'A*******************************a' ## 你在https://console.cloud.tencent.com/cam/capi 获取到的SecretId
  secretKey: 'B*******************************G' ## 你在https://console.cloud.tencent.com/cam/capi 获取到的SecretKey
```

将`A*******************************a`和`B*******************************G`更换为你在腾讯云[API控制台](https://console.cloud.tencent.com/cam/capi)获取到的`secretId`和`secretKey`。具体配置方法可以[参考这里](https://www.techeek.cn/hexo-deploy-tencentcloud-cdn)。

之后使用`hexo g -d`部署即可看到效果。

**命令：**

```
hexo g -d
```

**输出：**

```
INFO  Deploy done: tencent_cdn
腾讯云CDN首页刷新推送结果{"code":0,"message":"","codeDesc":"Success","data":{"count":1,"task_id":"1540810210711616112"}}
```
**返回值说明**

| 参数名称 | 类型   | 描述                                                         |
| -------- | ------ | ------------------------------------------------------------ |
| code     | Int    | 公共错误码，0表示成功，其他值表示失败。 详见错误码页面的[公共错误码](https://cloud.tencent.com/doc/api/231/5078#1.-.E5.85.AC.E5.85.B1.E9.94.99.E8.AF.AF.E7.A0.81) |
| message  | String | 模块错误信息描述，与接口相关                                 |
| codeDesc | String | 英文错误信息，或业务侧错误码。 详见错误码页面[业务错误码](https://cloud.tencent.com/document/product/228/5078#2.-.E6.A8.A1.E5.9D.97.E9.94.99.E8.AF.AF.E7.A0.81) |
| data     | Array  | 详细说明见下文                                               |
**data**

| 参数名称 | 类型   | 描述                  |
| -------- | ------ | --------------------- |
| count    | Int    | 此次刷新提交的URL数目 |
| task_id  | String | 此次刷新任务对应的ID  |

> **需求**
>
> - [x] 部署hexo时自动提交首页链接刷新CDN
> - [ ] 部署hexo时自动提交刷新整个目录
> - [ ] 更新文章时按需刷新文章链接
>
>
>
> **更新日志**
>
> 2018年10月29日 创建新项目，后续更新请耐心等待。

本项目更改参考腾讯云CDN官方SDK，详见[这里](https://github.com/QCloudCDN/CDN_API_DEMO/tree/master/Qcloud_CDN_API/nodejs)。