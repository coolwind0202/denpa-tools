const ResearchStatusType = () => {
  // ファイルを送信させる。
  // 送信されたファイルをOCRにかける。
  // Lv, 現在経験値, 次のレベルまでの経験値, HP, 攻撃力, 防御力, すばやさ, 回避率を自動入力
  // ※ functions でパラメータごとに画像を切り抜いて tesseract.js にかける
  return (
    <div>
      <p>
        体格判断
      </p>

      <section>
        <p>
          MAIN
        </p>
        <input type="file" />
        <h3> ステータス </h3>
      </section>

      <section>
        <p>
          MAIN
        </p>
        <h3> 経験値 </h3>
        <select>
          <option> チューリップ </option>
        </select>
      </section>

      <section>
        <p>
          SUB
        </p>
        <h3> シルエット </h3>
      </section>

    </div>
  )
}

export default ResearchStatusType;