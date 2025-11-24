import reviews from './../jsons/reviews.json' with { type: 'json' }

const reviewsGrid = document.getElementById('reviews-grid')

for (let review in reviews) {
  reviewsGrid.innerHTML += `

    <div class="card w-full lg:w-[400px]">
        <div class="card-content">
          <p class="card-text leading-6">${reviews[review].text}</p>
          <div class="flex items-center gap-4 mt-7">
            <img src="${reviews[review].avatar_path}" alt="${reviews[review].name + '_avatar'}" class="size-9 rounded-full" />
            <div class="space-y-1.5 [&_span]:block">
              <span>${reviews[review].name}</span>
              <span class="text-xs text-dimmed-black">${reviews[review].company}</span>
            </div>
          </div>
        </div>
      </div>

`
}
