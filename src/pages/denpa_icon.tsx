const DenpaIcon = () => {
  /*
    画面右端に、クリックで浮かび上がるメニュー
    レイヤーアイコンをクリックすると、吹き出しメニューが出現しレイヤー一覧が
    レイヤー一覧から編集するレイヤーをクリックすると、パーツの一覧が現れるのでクリックして編集する

    歯車アイコンをクリックすると、吹き出しメニューが出現し位置微調整用のテキストボックスを編集できる

    ファイルアイコンをクリックすると、ファイルに保存するための吹き出しメニューが出現

    基本的にユーザーは画面の中央と右側だけを見る

    画面上部にトップページへ戻るボタン
  */
  return (
    <div>
      <button>
        （保存アイコン）
      </button>
      <menu>
        <section className="layers">
          <section className="eye">
            <p> 目 </p>
            <img alt="きらきら目" /> <span> きらきら目 </span>
            <hr />
            <span> ... </span>
          </section>
          <section className="head">
            <img alt="チューリップ" /> <span> チューリップ </span>
            <hr />
            <img alt="ハート" /> <span> ハート </span>
            <hr />
            <span> ... </span>
          </section>
          <section className="pattern">
            <img alt="虎柄" /> <span> 虎柄 </span>
            <hr />
            <span> ... </span>
          </section>
          <section className="decoration">
            <img alt="" /> <span> </span> 
            <hr />
            <span> ... </span>
          </section>
        </section>
        <section className="adjustment">
          <p> 顔 </p> <span> 縦方向： </span> <input type=""/> <span> px </span>
                      <span> 横方向： </span> <input type=""/> <span> px </span>
          <p> 目 </p> <span> 縦方向： </span> <input type=""/> <span> px </span>
          <p> ... </p>
        </section>
      </menu>
      <main>
        <svg className="screen"></svg>
      </main>
    </div>
  )
}

export default DenpaIcon;