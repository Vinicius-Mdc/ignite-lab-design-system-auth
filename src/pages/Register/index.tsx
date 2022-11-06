import { Envelope, Lock, User } from 'phosphor-react';
import React, { FormEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Heading } from '../../components/Heading';
import Logo from '../../components/Logo';
import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';
import { isEmailValid } from '../../utils/validations';

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [apiError, setApiError] = useState('')
  const navigate = useNavigate()

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    if(name.length < 3){
      setNameError('Nome muito curto')
    }
    if(!isEmailValid(email)){
      setEmailError('E-mail inválido')
    }
    if(password.length < 8){
      setPasswordError('Senha muito curta')
    }
    if(password !== confirmPassword){
      setConfirmPasswordError('Senhas não conferem')
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
          Registre-se para começar a usar
        </Text>
      </header>
      <form className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10 pl-5 pr-5'>
        <label htmlFor='name' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Nome de usuário</Text>
          <TextInput.Root>
            <TextInput.Wrapper error={nameError !== ''}>
              <TextInput.Icon>
                <User />
              </TextInput.Icon>
              <TextInput.Input placeholder='Digite seu nome' value={name} onChange={(e) => {
                setName(e.target.value)
                setNameError('')
              }} />
            </TextInput.Wrapper>
            {nameError !== '' && <TextInput.Error>{nameError}</TextInput.Error>}
          </TextInput.Root>
        </label>
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
        <label htmlFor='confirmPassword' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Confirme Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Wrapper error={confirmPasswordError !== ''}>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type='password' placeholder='********' value={confirmPassword} onChange={(e) => {
                setConfirmPassword(e.target.value)
                setConfirmPasswordError('')
              }} />
            </TextInput.Wrapper>
            {confirmPasswordError !== '' && <TextInput.Error>{confirmPasswordError}</TextInput.Error>}
          </TextInput.Root>
        </label>
        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember'/>
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>
        {apiError !== '' && <Text className='text-red-500' size='sm'>{apiError}</Text>}

        <Button.Root className='mt-4' type='submit' onClick={(e) => {handleRegister(e)}}>
          <Button.Text loading={loading}>Registre-se</Button.Text>
        </Button.Root>
      </form>
    </div>
  )
}

export default Register;