# Webページテンプレート

このプロジェクトは、Webページの開発のための基本的なテンプレートです。フロントエンドとバックエンドがセットになっており、すぐに開発を始めることができます。

## 概要

このテンプレートには、以下の機能が含まれています：
- 環境構築用の `docker-compose.yml` および`Dockerfile`
- TypeScriptで書かれたコード
  - フロントエンド (React / Vue / Material UI)
  - バックエンド (Node.js / Express)

## 必要な前提条件

- `Docker`と`Docker Compose`がインストールされていること

## セットアップ

1. このリポジトリをクローンします：
```bash
git clone https://github.com/hiroki1389/web-app-template.git
```
2. 適切なフォルダに移して，プロジェクト名を適当なものにする
3. `docker-compose.yml`を開く
    1. frontend，backendそれぞれのイメージ名，コンテナ名を好きなようにする
    2. それぞれの`ports`の左側はホスト（ローカルPC）側のポート番号なので，空いているポート番号に設定
4. client/index.htmlのタイトルを変更するのを忘れない
4. ビルドしてローカルサーバーを立ち上げる
```sh
docker-compose up --build
```
5. VS Codeの環境構築
    1. 拡張機能のRemote Developmentをインストール
    2. 検索バーに`> Attach to Running Container`を入力し選択
    3. 現在実行中のコンテナ一覧が表示されるので開発しているコンテナを選択
    4. コンテナ内のフォルダが開けるので完了

## 動作確認

### フロントエンド
```sh
http://localhost:5173
```

### バックエンド
```sh
http://localhost:3001
```

### 開発中断したいとき

```sh
docker-compose down
```

### 2回目以降のコマンド
```sh
docker-compose up
```