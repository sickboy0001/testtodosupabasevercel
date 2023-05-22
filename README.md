## NextTodo

- [ ] ソースの最適化
- [ ] 実践に近い TODO 化
- [ ] 可能であれば３ GoodThing の RDB 化
- [ ] Supabase の利用（Vercel を利用しないようにする）
- [ ] Supabase の利用・ユーザー承認
- [ ] ログイン機能
- [x] LocalStorage 周りの検証
- [ ] ダミーメアドでのテスト
- [ ] サインイン画面案作成
- [ ] 全体の画面フロー整理
- [ ] GitHub 上げること。
- [ ] ユーザーテーブルコピして作成するシナリオ作成
- [ ] 必要な機能整理する
- [x] Todo テーブルデザイン見直し Unique をつけてみる。嘘つかれた印象あり。無理だった、検証大事、そのための準備は
- [ ] コンバート、ボタン二三デ出来るのが理想、Notion から取って、こちらに保存！→ あきらめ気味。それ用のサイトつくったほうがいい。JS,TS の差異にぬまる
- [ ] dnd の機能評価
- [ ] jsDATATABLE 使ってみる
- [x] ゲスト用の管理方法検討、仮でユーザーコードゲットして使いまわし。実態は env に持つ
- [ ] UI 上での直接入力

## 学んだこと

NextJS:Tailwindcss 最初から入れたほうがいい  
NextJS:src でのフォルダ構成は Yes のほうが楽。  
Tailwindcss の ClassName がなかなかなしっくりこないが学習しかない  
Delete だけ特殊（Supabase 　 SQL）  
NextJS 最新だとディレクトリ構造、ファイル名が比較的異なる。がたどっていけば理解できる。  
TailWind 入れると、Global.css 不要なもの削除 OK
Page 以外は Component に置く  
Utils は React 非依存を置く
デザイン（モックアップベース）→ ハンドルを結びつける（Click、Change）→ ハンドルの設定  
console.log で見たい場所はすぐ見る。  
TS での IntilSence で型はたどれる
Functions.ts のみでカバーするのは不適な可能性あり

## Git へのアップ

Git でリポジトリ作成  
あとは手順通りで OK

```
echo "# {}" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin {}
{}
git push -u origin main
```

First, run the development server:
