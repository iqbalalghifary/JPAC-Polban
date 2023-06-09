const TopCardBlock = () => {
  const cardContent = [
    {
      id: 1,
      icon: "flaticon-briefcase",
      countNumber: "22", //jumlah postingan lowongan kerja yg belum diverifikasi
      metaName: "Pending Jobs",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "la-building",
      countNumber: "9382",
      metaName: "Pending Companies", //jumlah perusahaan yg belum diverifikasi
      uiClass: "ui-red",
    },
    {
      id: 3,
      icon: "la-wallet",
      countNumber: "74",
      metaName: "Pending Payment", //jumlah pembayaran yang belum di verifikasi
      uiClass: "ui-yellow",
    },
    {
      id: 4,
      icon: "la-bookmark-o",
      countNumber: "32",
      metaName: "etc",
      uiClass: "ui-green",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>{item.countNumber}</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;
