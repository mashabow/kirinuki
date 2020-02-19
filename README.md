# kirinuki

1枚の画像から複数の矩形領域を切り抜く

⚠️ 個人的な作業のために作った簡易的なアプリです

![screenshot](https://user-images.githubusercontent.com/6268183/74839933-718da080-5369-11ea-859b-face10bf36b4.png)

## How To Use

1. 「ここをクリック or ドロップして画像を開く」から、ローカルの画像を開きます
2. 切り抜き範囲をドラッグで選択します。右上のスライダーで傾きを調整可能です
3. Enter キーを押すと、切り抜き範囲が確定されます
4. 「切り抜きデータをダウンロード」で、json ファイルを保存します
5. [`kirinuki.js`](https://github.com/mashabow/kirinuki/blob/master/kirinuki.js) のようなスクリプトを使って、実際に画像を切り抜きます

切り抜きデータ内の値は、[cropper.js の `getData()`](https://github.com/fengyuanchen/cropperjs/tree/v1.5.6#getdatarounded) の戻り値と同じ形式になっています。

## Development

[Create React App](https://create-react-app.dev/) と [Redux Toolkit](https://redux-toolkit.js.org/) を使っています。

master ブランチを更新すると、GitHub Actions によって自動でビルド／デプロイされます。

## Author

Masaya Nakamura ([@mashabow](https://github.com/mashabow))
