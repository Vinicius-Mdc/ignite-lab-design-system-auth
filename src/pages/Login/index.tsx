import { Envelope, Lock } from 'phosphor-react';
import React, { FormEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Heading } from '../../components/Heading';
import Logo from '../../components/Logo';
import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';
import { isEmailValid } from '../../utils/validations';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [apiError, setApiError] = useState('')
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    if(!isEmailValid(email)){
      setEmailError('E-mail inválido')
    }
    if(password.length < 8){
      setPasswordError('Senha muito curta')
    }
    setLoading(false)
    navigate('/')
  }

  return (
    <div className='min-h-screen w-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col md-h:justify-start pt-4 pb-4'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e começe a usar
        </Text>
      </header>
      <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10 pl-5 pr-5'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Wrapper error={emailError !== ''}>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input type='email' placeholder='Digite seu e-mail' value={email} onChange={(e) => {
                setEmail(e.target.value)
                setEmailError('')
              }} />
            </TextInput.Wrapper>
            {emailError !== '' && <TextInput.Error>{emailError}</TextInput.Error>}
          </TextInput.Root>
        </label>
        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Wrapper error={passwordError !== ''}>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type='password' placeholder='********' value={password} onChange={(e) => {
                setPassword(e.target.value)
                setPasswordError('')
              }} />
            </TextInput.Wrapper>
            {passwordError !== '' && <TextInput.Error>{passwordError}</TextInput.Error>}
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>
        {apiError !== '' && <Text className='text-red-500' size='sm'>{apiError}</Text>}

        <Button.Root className='mt-4' type='submit' onClick={(e) => {handleLogin(e)}}>
          <Button.Text loading={loading}>Entrar na plataforma</Button.Text>
        </Button.Root>
      </form>
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a className="text-gray-400 underline hover:text-gray-200 cursor-pointer">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href='/register' className="text-gray-400 underline hover:text-gray-200 cursor-pointer">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

export default Login;