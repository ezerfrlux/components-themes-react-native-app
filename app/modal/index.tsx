import ThemedView from '@/presentation/shared/ThemedView'
import { Link } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

export default function ModalScreen() {
  return (
    <ThemedView>
      <Link asChild href="/modal/modal-window" className='mx-4'>
        <Text  className='my-2 text-xl text-light-text dark:text-dark-text'>open modal</Text>
      </Link>
      </ThemedView>
  )
}