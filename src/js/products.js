import pcs from './../jsons/pcs.json' with { type: 'json' }

const pcsGrid = document.getElementById('pcs-grid')

for (let i in pcs) {
  pcsGrid.innerHTML += `

    <div class="card">
          <img src="${pcs[i].img}" alt="${pcs[i].title + '_img'}" class="card-img" />
          <div class="card-content">
            <a href="#" class="card-title mb-1.5">${pcs[i].title}</a>
            <p class="card-text line-clamp-2 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore totam, quod eligendi iure, provident voluptatem a explicabo dignissimos itaque saepe laboriosam cupiditate nisi! Reiciendis ratione itaque culpa quibusdam. Ducimus harum ratione quos quidem sit dolorem aut ullam et, possimus laboriosam mollitia animi culpa fugit, officia impedit iste nobis. Magnam ducimus excepturi necessitatibus. Libero ex modi totam facilis dolorum vel veniam numquam illum eum quos ipsum neque culpa nulla similique quo nihil eligendi in expedita, tenetur minus doloribus assumenda porro! Sapiente, tempore eum itaque hic optio maxime veniam officiis provident debitis maiores architecto quibusdam fuga nesciunt corporis, quo dignissimos harum eligendi quidem voluptatibus corrupti ab. Nobis ut impedit neque placeat! Necessitatibus magnam ea mollitia officiis in fugiat similique nemo neque, repellendus officia alias assumenda molestiae dignissimos rem autem a magni beatae temporibus
              deserunt recusandae ducimus. In, ducimus quasi explicabo aut quae vel mollitia nostrum tenetur nulla sed earum ea commodi!
            </p>
            <div class="mb-5 flex items-center justify-between">
              <span class="text-dimmed-black [&_svg]:text-midnight-900 inline-flex items-center gap-1.5 text-xs">
                <svg class="size-3.5 fill-none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.99772 0.729187C7.60982 0.729187 8.09194 1.1915 8.39971 1.8153L9.4276 3.88803C9.45875 3.95218 9.53266 4.04251 9.64372 4.12514C9.75467 4.20769 9.86335 4.25323 9.93481 4.26524L11.7954 4.57693C12.4675 4.68986 13.0308 5.01931 13.2137 5.59296C13.3964 6.16615 13.1287 6.76179 12.6454 7.24595L12.6449 7.24648L11.1995 8.70388C11.1422 8.76163 11.078 8.87042 11.0378 9.01217C10.9978 9.15299 10.9943 9.28126 11.0124 9.36409L11.0126 9.36526L11.4262 11.1682C11.5977 11.9185 11.5408 12.6626 11.0116 13.0516C10.4806 13.4419 9.75491 13.2689 9.09562 12.8763L7.35151 11.8353C7.27825 11.7915 7.15248 11.7561 7.00064 11.7561C6.84991 11.7561 6.72151 11.7911 6.64346 11.8364L6.64236 11.8371L4.90168 12.8761C4.24319 13.2701 3.5184 13.44 2.98731 13.0493C2.45845 12.6602 2.39875 11.9175 2.57081 11.1678L2.98427 9.36526L2.98452 9.36409C3.00265 9.28126 2.99911 9.15299 2.95913 9.01217C2.91888 8.87042 2.85471 8.76163 2.79742 8.70388L1.35091 7.24537C0.870711 6.7612 0.603871 6.16609 0.785136 5.59375C0.966926 5.01975 1.52917 4.6899 2.20169 4.57689L4.06077 4.26546L4.06136 4.26537C4.12951 4.25354 4.23657 4.20851 4.34728 4.12575C4.45819 4.04284 4.53226 3.95231 4.56348 3.88803L4.56506 3.88483L5.59161 1.81475L5.59202 1.81394C5.90275 1.19065 6.38633 0.729187 6.99772 0.729187Z"
                    fill="currentColor"
                  />
                </svg>
                ${pcs[i].rate} (508 Reviewd)
              </span>
              <span class="block font-medium">${pcs[i].price + '$'}</span>
            </div>
            <div class="flex items-center gap-2.5 *:w-full">
              <button class="primary xs">
                <svg class="fill-none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.50573 1.3125C6.84808 1.31249 7.16069 1.31283 7.44513 1.31877C7.46881 1.31477 7.49319 1.31252 7.51804 1.3125H8.81514C9.58199 1.3125 10.2005 1.31182 10.6882 1.3763C11.1886 1.4425 11.6123 1.58389 11.9568 1.91178C12.301 2.23941 12.4646 2.65625 12.5578 3.15421C12.6488 3.64005 12.6816 4.26096 12.7242 5.03182L12.9178 8.53183C12.965 9.38554 13.0034 10.0705 12.96 10.6088C12.9156 11.1595 12.7815 11.6266 12.4285 12.0022C12.075 12.3782 11.6179 12.5399 11.0727 12.6152C10.5403 12.6887 9.85762 12.6875 9.00823 12.6875H7.3249C7.31743 12.6875 7.31008 12.6867 7.30268 12.6864C7.11613 12.6874 6.91983 12.6875 6.71368 12.6875H4.9534C4.12184 12.6875 3.45197 12.6875 2.92769 12.6152C2.38246 12.5399 1.92477 12.3782 1.57133 12.0022C1.21841 11.6266 1.08417 11.1594 1.03983 10.6088C0.997145 10.0786 1.03411 9.40601 1.08028 8.56998L1.08255 8.53183L1.27567 5.03182L1.27738 5.00219C1.31916 4.24513 1.35282 3.63377 1.44258 3.15421C1.53579 2.65623 1.69943 2.23942 2.04357 1.91178C2.38798 1.58397 2.81134 1.44251 3.31164 1.3763C3.79404 1.31249 4.40478 1.31249 5.16019 1.3125H6.50573ZM9.86333 2.19605C10.0497 2.47018 10.1563 2.79021 10.2245 3.15421C10.3143 3.6337 10.3479 4.24471 10.3897 5.00163L10.3914 5.03182L10.5845 8.53183L10.5868 8.56939C10.633 9.4056 10.6699 10.0785 10.6272 10.6088C10.5905 11.0648 10.4913 11.463 10.2581 11.8C10.5248 11.791 10.7534 11.7757 10.9531 11.7482C11.3986 11.6866 11.63 11.5742 11.7911 11.4029C11.9525 11.2311 12.0514 10.9913 12.0878 10.5387C12.1253 10.0738 12.0925 9.45921 12.044 8.58024L11.8509 5.08024C11.807 4.2857 11.7756 3.73203 11.6976 3.31543C11.622 2.9111 11.5121 2.69687 11.3536 2.54582C11.1953 2.39517 10.9777 2.29679 10.5737 2.24333C10.3721 2.21667 10.1394 2.20331 9.86333 2.19605ZM7.58355 3.0625C7.34193 3.0625 7.14605 3.25837 7.14605 3.5C7.14605 4.22487 6.5584 4.8125 5.83355 4.8125C5.10866 4.8125 4.52103 4.22487 4.52103 3.5C4.52103 3.25837 4.32515 3.0625 4.08353 3.0625C3.8419 3.0625 3.64603 3.25837 3.64603 3.5C3.64603 4.70812 4.62541 5.6875 5.83355 5.6875C7.04163 5.6875 8.02105 4.70812 8.02105 3.5C8.02105 3.25837 7.82517 3.0625 7.58355 3.0625Z"
                    fill="currentColor"
                  />
                </svg>

                Add to cart
              </button>
              <button class="secondary xs">View product</button>
            </div>
          </div>
    </div>
    

`
}
