import { JumpTop } from "../../components/common/jump_top";
import Image from "next/image";
import Head from "next/head";
import styles from "../../../styles/blog.module.css";

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const Exp = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title> 経験値テーブルについて </title>
      </Head>
      <JumpTop className={styles.jumpTopDark}/>
      <h3>
        経験値テーブルについて
      </h3>

      <h4> 経験値テーブルとは </h4>
      <p>
        経験値テーブルはRPGで、あるレベルに到達するにはこの量の経験値が必要だ、というのを定義したものである。
      </p>

      <p>
        独自用語ではなく、RPGではよく見られる表現だ。
      </p>

      <p>
        電波人間のレベルアップ必要経験値は8段階に分かれており、これらは均一に8等分されている。
      </p>

      <p>
        ここではこれを経験値タイプと呼ぶこととする。
      </p>

      <h4> 経験値テーブルの性質 </h4>

      <p>
        回避0最大型がもっとも必要経験値量が多い。回避0最大型の経験値テーブルをタイプAとして、必要量の大きい順にアルファベットを振っていくと・・・
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>A(8715)</td>
            <td>B(8631)</td>
            <td>C(8547)</td>
            <td>D(8463)</td>
            <td>E(8380)</td>
            <td>F(8296)</td>
            <td>G(8212)</td>
            <td>H(8128)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>0.9903614458</td>
            <td>0.9807228916</td>
            <td>0.9710843373</td>
            <td>0.9615605278</td>
            <td>0.9519219736</td>
            <td>0.9422834194</td>
            <td>0.9326448652</td>
          </tr>
        </tbody>
      </table>

      <p>
        こうなる。表上段は Lv.15 での経験値で、表下段は A を基にした必要経験値倍率だ。
      </p>

      <p>
        つまり、回避0最大型の経験値テーブルに対して、求めたい経験値タイプの必要経験値倍率の積を演算することで
        求めたい経験値タイプの経験値テーブルを取得することができる。
      </p>

      <h4>
        必要経験値の増加
      </h4>

      <p>
        みなさんご存知の通り、レベルが上がるとともに必要経験値の量も上昇していく。
      </p>

      <p>
        ここで、各レベルの「累計経験値量」を折れ線グラフにプロットすると以下のようになる。
      </p>

      <Image src="/blog/exp_fullchart.svg" width={600} height={600}/>

      <p>
        Lv.100 までは曲線的に、Lv.100 からは直線的に増加しているのがわかると思う。
      </p>

      <p>
        さらに、Lv.15 までの「累計経験値量」グラフを「両対数グラフ」というものに再プロットすると以下のようになる。
      </p>

      <Image src="/blog/exp_add_partial_log.svg" width={600} height={600}/>

      <p>
        両対数グラフが直線になるとき、それは元の関数がべき乗関数であるときだ。
      </p>

      <p>
        また、「必要経験値量」を折れ線グラフにプロットすると以下のようになる。
      </p>

      <Image src="/blog/exp_full_add.svg" width={600} height={600} />

      <p>
        Lv.100 から奇妙に折れ曲がっている。このようなことがあっていいのか。
      </p>

      <p>
        このグラフは明らかに、スタッフが Lv.100 から必要経験値量の計算関数を切り替えていることを示唆している。
      </p>

      <p>
        これを踏まえたうえで、「必要経験値量」を両対数グラフに再プロットすると、以下のようになる。
      </p>

      <Image src="/blog/exp_full_add_log.svg" width={600} height={600} />

      <p>
        ボコボコに折れ曲がっているのである。折れ曲がるタイミングを調べると、 Lv.5、 Lv.20、 Lv.30、 Lv.75、 Lv.100 と、作為的なものを感じる。
      </p>

      <p>
        これが経験値関数の切り替わるタイミングではないのかと、考えている。
      </p>

      <h4> 実際に回帰分析 </h4>
      <p>
        この曲線がどのような関数から導かれるのか、決定してみることにする。
      </p>

      <p>
        まず、Lv.30 から Lv.75 までの「必要経験値量」の関数は線形回帰で求められる。
      </p>

      <p>
        計算すると、<Latex>{"$f(x) = 721.080666x + 3280.98242 \\quad(30 \\leqq x \\leqq 75)$"}</Latex>
      </p>

      

      <p>
        Lv.75 から Lv.100 までの「必要経験値量」は曲線的に増加するが、これは両対数グラフが直線より指数関数だ。
      </p>

      <p>
        計算すると、 <Latex>{"$f(x) = 0.000096x^{4.67474} \\quad(75 \\leqq x \\leqq 100)$"}</Latex>と求まる。
      </p>

      <h4> むすび </h4>

      <p>
        と、ここまで書いてきたが実際にはたったこれだけのことしか筆者には分かっていない。
        残念なことにLv.122まで記録したところで、筆者は飽きてしまった。
      </p>

      <p>
        というか、得られた関数の定数の値がキモすぎる。
      </p>

      <p>
        また、Lv.30 以下での値の動きは本当に不可解だ。以下の3つの可能性を考えたが、どうだろうか？
      </p>
      <ul>
        <li>
          簡単な関数をベースに、レベルが上がるごとに経験値の増分に強いバイアスがかかるようにした。
        </li>
        <li>
          実際には簡単な数列に過ぎない。
        </li>
        <li>
          30個程度なのだから、プランナーが手打ちした。
        </li>
      </ul>

      <p>
        解析したらすぐにでもアルゴリズムが判明するだろうが、意外なことにいまだ誰も解析は行っていないようである。
      </p>

      <p>
        有用性に疑問があるだろうか？レア個体の判別は非常に難しい。だが、体つきと経験値タイプは体格に依存している。
        ゆえに、ステータス以外の体格判断の根拠を、経験値テーブルに求めることができる。
      </p>

      <h4> 参考 </h4>

      <p>
        将来この検証にピリオドを打ってくれる人のために、私が作成したスプレッドシートのリンクをいくつか紹介しておこうと思う。
      </p>

      <ul>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/19qkpblo75Q6uVT8uFdQZGH-gQNJuedSGedx2SansP-k/edit?usp=sharing"> アンテナ無し最大型データ </a>
          <span> / Lv.122 まで完成。一部記録ミスもあるが、現時点でもっとも有効なデータ。経験値とステータスの両方を記録している。</span>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1-7cvW_4K2FBgLsVKMs6vDO5ZtbiVMb6JigV_iMLC_Lk/edit?usp=sharing"> 全アンテナステータス表 </a>
          <span> / ほとんど完成していない。全アンテナ・全体格のステータス変動を記録することを目的としたシート。 </span>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1DHC-546fh0GPJq6-6EL8Wnh_6eAQakZ3ZKb56aUzMXE/edit?usp=sharing"> 経験値B ~ E表 </a>
          <span> / 経験値タイプ B、C、D、E の Lv.15 までの経験値テーブル。 </span>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1GgOE-ZlHF26a3G0O2wezD2HRU_DMIu4WAC3iyw197Bs/edit?usp=sharing"> 回避15最速 </a>
          <span> / 回避15最速型の経験値とステータスの記録（Lv.24まで）。</span>
        </li>
      </ul>

      <p>
        昔、某有名な体格表を作った人に憧れてライブドアブログに今より多くのデータをまとめていましたが、恥ずかしくなって爆破してしまいました。
        ・・・今この記事を書いて、はた迷惑だなと感じた。
      </p>
    </div>
  )
}

export default Exp;