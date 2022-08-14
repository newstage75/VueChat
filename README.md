# 2022/08/13(土)〜 Laravel×Vue連携の学習用

## 参考サイト
[[前編]LaravelとVue.jsを使ってリアルタイムChatアプリを作ってみた。](https://masa-engineer-blog.com/laravel-vue-js-real-time-chat-1/)

[[後編]LaravelとVue.jsを使ってリアルタイムChatアプリを作ってみた。](https://masa-engineer-blog.com/laravel-vue-js-real-time-chat-2/)


## 補助サイト
[Laravel-uiでvue.jsを使う方法](https://zenn.dev/naoki0722/articles/84fcf37af3947b)

[Laravel 8.x アセットのコンパイル（Mix）](https://readouble.com/laravel/8.x/ja/mix.html)

## つまづきポイント(序盤はnpmの依存関係で苦戦・・・)
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


### コンポーネントのファイルの格納場所はresources/js/components/Message.vue
ブログ中では、jsが抜けているので注意

### 開発はMAMP環境で行った。



------------------
## 学習用＠技術メモ
### Event to Broadcast #3
 [Pusher Channels公式ドキュメント](https://laravel.com/docs/8.x/broadcasting#pusher-channels)
 > If you plan to broadcast your events using Pusher Channels, you should install the Pusher Channels PHP SDK using the Composer package manager:

> Pusher Channels を使ってイベントを配信する場合は、Composer パッケージマネージャを使用して Pusher Channels PHP SDK をインストールする必要があります。

イベントの仕組みはLaravelにも実装されている。
イベントを発行することで、そのイベントを受け取る側の処理を呼び出し、実行させることができる。

イベントを利用するためには、EventServiceProviderを使用。
EventServiceProviderは、イベントを管理する専用のサービスプロバイダ。$listenプロパティにイベントのリッスンの設定をまとめている。ここに独自のイベントクラスとイベントリスナークラスの情報を追記すれば、それをもとにクラスを生成できる。

イベントの作成は、下記コマンドで行った。
`php artisan event:generate`
これで、$listenに登録した情報をもとに、イベントとイベントリスナーのスクリプトが自動生成される。

### Pusherとは
> PusherとはWebサービスの1つで、WebSocketを使ってリアルタイムかつ両方向の通信機能をWebサイトやモバイルアプリに組み込むサービスです。