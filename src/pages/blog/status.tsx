import styles from "../../../styles/blog.module.css";
import { JumpTop } from "../../components/common/jump_top";
import Image from "next/image";

const Status = () => {
  return (
    <div className={styles.main}>
      <JumpTop className={styles.jumpTopDark} />
      <h4>
        ステータスについて
      </h4>

      <p>
        ステータスは一次関数だ。間違いない。
      </p>

      <p>
        いくつかの体格について、HPの推移をグラフにプロットしてみた。
      </p>

      <Image src="/blog/status_various.svg" width={600} height={600} />

      <p>
        見事に直線を描いている。
        半透明の線が延長されているが、これはGoogleスプレッドシートの「トレンドライン」という機能で、
        誰でも簡単に使える「線形回帰」のツールだ（詳細は省く）。
        グラフ右に、Googleスプレッドシートが予測した一次関数の式が記されている。
      </p>

      <p>
        つまるところ、電波人間のステータスは一次関数なのだ。
      </p>

      <p>
        Lv.100 までの回避0最大型のステータスグラフも見てみよう。
      </p>

      <Image src="/blog/status_all.svg" width={600} height={600} />

      <p>
        これも直線だ。ところどころ線が跳ねているように見えるのは、転生時のボーナスだけで、それ以外はきれいな直線にほかならない。
      </p>

      <p>
        ここではグラフは示さないが、アンテナが違ってもその傾向に変わりはない。
      </p>

      <p>
        なお、この検証の有用性は自明だ。ステータスは体格を何よりも表す資本である。
        ステータス算出用の関数を解明することで、自由にレベルと体格からステータスを計算したり、
        逆にステータスとレベルから体格を逆算したりできるのだ。
      </p>

    </div>
  );
}

export default Status;