import Link from "next/link";

const JumpTop = ({ className }: { className?: string }) => {
  return (
    <p className={className}>
      <Link href="/"> ←トップページへ戻る</Link>
    </p>
  )
}

export { JumpTop };