import profilePic from '../../assets/profile.png'
export default function Header() {
  return (
    <div className='flex justify-between items-center py-6 border-b border-[#11111126]'>
        <h1 className='text-4xl font-bold text-[#111]'>Knowledge Cafe</h1>
        <img src={profilePic} alt="" />
    </div>
  )
}
