import React from 'react'

const Notification = (massage) => {
  return (
    <div class="relative bg-blue-300 text-blue-900 text-xl font-bold px-6 py-4 rounded-3xl w-max max-w-sm">
 {massage}
  <div class="absolute bottom-0 right-4 w-6 h-6 bg-blue-300 rotate-45 transform translate-y-2 border-l border-b border-blue-300"></div>
</div>
  )
}

export default Notification
