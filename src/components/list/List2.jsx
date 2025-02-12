function List({ dataSource, renderItem }) {
    return (
      <ul>
        {dataSource?.map((item) => (
          <div key={item.id}>
            {renderItem(item)}
          </div>
        ))}
      </ul>
    )
  }
  
  export default List