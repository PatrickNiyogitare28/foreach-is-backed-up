# foreach is backedup

If you get some compiling errors when using babel@^7.0.0, that's because Vuepress is using babel's beta version now, maybe some dependencies are not compatible with your babel's version, you can fix it by adding `resolutions` in `package.json`, eg:

```json
{
  "resolutions": {
    "vuepress/**/@babel/preset-stage-2": "7.0.0",
    "vuepress/**/@babel/core": "7.4.4",
    "vuepress/**/@babel/runtime": "7.4.4",
    "vuepress/**/babel-loader": "8.0.6",
    "vuepress/**/@vue/babel-preset-app": "3.3.0"
  }
}
```
