

const UserItem = () => {
  return (
    <div className="flex items-center gap-2 p-2 shadow">
      <div className="flex justify-center items-center w-10 h-10 bg-gray-300 rounded-full">UN</div>
      <div>
        <h4 className="font-semibold">User Name</h4>
        <p className="text-sm text-gray-600">user@example.com</p>
      </div>
    </div>
  )
}

export default UserItem;
