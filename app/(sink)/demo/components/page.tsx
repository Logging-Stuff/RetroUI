import { Badge } from '@/packages/ui'
import React from 'react'

export default function page() {
  return (
    <div className='container max-w-6xl mx-auto'>
        <div className="space-x-4">
          <Badge>Badge</Badge>
          <Badge variant="success">Badge</Badge>
          <Badge variant="error">Badge</Badge>
          <Badge variant="filled">Badge</Badge>
        </div>
    </div>
  )
}
