import Button from '@components/button/Button';
import Container from '@components/container/Container';
import Input from '@components/input/Input';
import Link from 'next/link';

export default function SignIn() {
  return (
    <Container>
      <Input />
      <Button>로그인</Button>
      <Button link color='gray'>
        <Link href={`signup`}>회원가입</Link>
      </Button>
    </Container>
  );
}
