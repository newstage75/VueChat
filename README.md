# 2022/08/13(土)〜 Laravel×Vue連携の学習用

## 参考サイト
[[前編]LaravelとVue.jsを使ってリアルタイムChatアプリを作ってみた。](https://masa-engineer-blog.com/laravel-vue-js-real-time-chat-1/)

[[後編]LaravelとVue.jsを使ってリアルタイムChatアプリを作ってみた。](https://masa-engineer-blog.com/laravel-vue-js-real-time-chat-2/)


## 補助サイト
[Laravel-uiでvue.jsを使う方法](https://zenn.dev/naoki0722/articles/84fcf37af3947b)

[Laravel 8.x アセットのコンパイル（Mix）](https://readouble.com/laravel/8.x/ja/mix.html)

## つまづきポイント(序盤はnpm installの依存関係で四苦八苦・・・)
### nodeのバージョンアップ(bootstrapの最新版がnode v16以上だった。)
[こちらを参考に](https://qiita.com/k3ntar0/items/322e668468716641aa5c)

~~### laravel/uiは^４で行った
その後、`php artisan ui vue --auth`~~

### Laravel8やり直したので↓
`composer require laravel/ui:^3`

### vue-loaderが必要というのでインストールした
Additional dependencies must be installed. This will only take a moment.

 	Running: npm install vue-loader@^15.9.8 --save-dev --legacy-peer-deps

 	Finished. Please run Mix again.


~~### VueのインストールはV3で行なってしまった。
v2.6の場合は、Vueをインストールする際に下の操作が必要だった。
`npm install vue@2.6 --save-dev`~~
### Laravel8で実装し直したので行わず。
