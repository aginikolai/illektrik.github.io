export function createGameField() {
   const cells = []
   let coordY = 0
   let coordX = 1
   for (let i = 0; i<121; i++) {
      if (i < 11) {
         cells.push(`<div class="battle_cell battle_cell--white"><p>${i === 0 ? '' : i}</p></div>`)
      } else if (i % 11 === 0) {
         cells.push(`<div class="battle_cell battle_cell--white"><p>${String.fromCharCode(65+coordY)}</p></div>`)
         coordY +=1
         coordX = 1
      } else {
         cells.push(`<div class="battle_cell" data-coords=${coordY}-${coordX}></div>`)
         coordX +=1
      }
   }

   return `
      <div class="battle_field">
         ${cells.join('')}
      </div>
   `
}
