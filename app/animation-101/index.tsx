import ThemedButton from '@/presentation/shared/ThemedButton'
import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'
import React from 'react'

export default function Animation101Screen() {
  return (
    <ThemedView margin >
      <ThemedText type='h1'>Animation101Screen</ThemedText>

      <ThemedButton className='mb-5' onPress={() => console.log("Fade in")}>Fade In</ThemedButton>
      <ThemedButton className='mb-5' onPress={() => console.log("Fade Out")}>Fade Out</ThemedButton>
    </ThemedView>
  )
}