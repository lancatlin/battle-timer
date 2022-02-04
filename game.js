
class Game {
  constructor () {
    this.getAttributes()
  }

  getAttributes() {
    const param = new URLSearchParams(window.location.href.split("?")[1])
    this.players_count = Number(param.get("players"))
    this.basic_time = Number(param.get("basic"))
    this.final_time = Number(param.get("final"))
    
    this.players = new Array(this.players_count).fill(null).map((v, i) => ({
      id: i,
      basic: this.basic_time,
      final: this.final_time,
    }))
    console.log(this.players)
  }
}

const game = new Game()
