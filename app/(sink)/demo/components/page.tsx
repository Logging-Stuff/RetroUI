import { Badge, Button } from '@/packages/ui'
import React from 'react'

export default function page() {
  return (
    <div className='container max-w-6xl mx-auto'>
        <div className="space-x-4">
          <Button>Default Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
        <div className="space-x-4">
          <Badge>Badge</Badge>
          <Badge variant="success">Badge</Badge>
          <Badge variant="error">Badge</Badge>
          <Badge variant="filled">Badge</Badge>
        </div>
    </div>
  )
}
