  import React, { FormEvent, MouseEvent, useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import Logo from '../../components/Logo';
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigation = useNavigate()

  const handleSignOut = () => {
    navigation('/login')
  }

  return (
    <div className='min-h-screen w-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col md-h:justify-start pt-4 pb-4'>
        <div className='max-w-[200px] w-screen h-screen flex flex-col items-center gap-8 justify-center'>
          <div className='max-w-[200px] w-screen flex flex-col items-center gap-4 justify-center'>
            <Logo className='animate-spin-slow' />
            <Heading size='lg' className='text-center'>
              Bem Vindo ao Ignite Lab!
            </Heading>
          </div>
          <Button.Root onClick={handleSignOut}>
            <Button.Text>Sair</Button.Text>
          </Button.Root>
        </div>
    </div>
  )
}

export default Home;