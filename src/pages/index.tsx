import { readFile } from 'fs';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";

const Home: NextPage = () => {

  return (
    <div>
      <h1>
        denpa-tools
      </h1>

      <p>
        電波人間に関するWebアプリを公開するページです。
      </p>

      <p>
        ニンテンドー3DS、スマートフォンからのアクセスを対象にしているため、リッチな装飾要素は省いています。
      </p>

      <p>
        PC版Chrome などでご利用の方は、このアプリをインストールしてお使いいただけます。
      </p>

      <h4>
        Menu
      </h4>

      <ul>
        <li>
          <Link href="/equip_search"> 装備検索 </Link>
        </li>
      </ul>

      <h4>
        Others
      </h4>
      <p>
        （ニンテンドー3DSなどのレガシーブラウザでは表示できない、あるいはPC以外の端末では適切に表示されない可能性があります。）
      </p>
      <ul>
        <li>
          <Link href="/research_status_type"> 体格判断ガチで </Link>
        </li>
      </ul>

      <h4>
        Memo
      </h4>
      <p>
        各種検証のまとめ
      </p>
      <p>
        （ニンテンドー3DSなどのレガシーブラウザでは表示できない、あるいはPC以外の端末では適切に表示されない可能性があります。）
      </p>
      <ul>
        <li>
          <Link href="/blog/exp"> 経験値テーブルについて </Link>
        </li>
        <li>
          <Link href="/blog/status"> ステータスについて </Link>
        </li>
      </ul>

      <h4> 作者について</h4>
      <p>
        カッシー、とろろ昆布という名前で活動していました。
      </p>
      <p>
        電波界隈老人会のおじいちゃん達と絡んでいましたが、Twitterをやめました。今、電波界隈の三途の川にいます。
      </p>
      <p>
        このページは趣味で作りました。気が向いたら削除します。
      </p>

      <a className="github-button" href="https://github.com/coolwind0202" data-style="mega" data-count-href="/coolwind0202/followers" data-count-api="/users/coolwind0202#followers">Follow @coolwind0202</a>

      <script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>
    </div>
  )
}

export default Home
