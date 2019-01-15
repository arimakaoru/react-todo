# ReactでToDoアプリを作る

## 2019-1-15
### イベントハンドラで引数を渡す方法
イベントハンドラはeventオブジェクトを唯一の引数とするので、引数を渡す場合は新しい関数を生成する
- onClick={(e) => this.deleteRow(id, e)}
- onClick={this.deleteRow.bind(this, id)}

公式ドキュメントの方法である  
ただし、上記２つの方法はいずれもrenderが呼び出されるたびに別の関数と判断され、再レンダリングするのでパフォーマンスが悪くなるかも（小さいアプリなら問題なし）  
他に良い方法は見つけられなかった

## 2019-1-14
スタート