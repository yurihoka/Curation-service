## キュレーションサービス

1. ローカルでの実行環境構築手順書

a. リポジトリのクローン
```
git clone https://github.com/yurihoka/Curation-service.git
cd Curation-service
```
b. 依存関係のインストール
```
npm install
```
c.サーバーの起動
```
npm run dev
```
2. 課題開始前に見積もった工数
- 43時間

3. 課題の取り組み開始から完了までに要した合計時間

4. 苦戦した箇所とその解決方法 (例 : 参考にしたサイト、書籍など)
- Topページ上部のデザイン再現（公式サイト）
- 時間差のhour, minutes表示
（https://dev.to/ala_garbaa/format-time-ago-function-time-differences-in-typescript-5ag2
https://b-moon.net/show-limited-days/）
- 各URLからID一覧を取得し、その詳細データを取得すること（https://qiita.com/gp333/items/42a60208e5cd31e74d1c）

1. 本システムの改善点や機能拡張できそうな点
- ソート機能の追加（カテゴリー別で新着順、など）
