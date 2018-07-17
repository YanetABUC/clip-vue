let main = new Vue({
  el: '#vcontainer',
  data: {
    activeSearch: '',
    transactions: [
    { amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
    { amount: 0.45, date: '01-12-2017T9:36', card_last_four: '4434' },
    { amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' },
    { amount: 7774.32, date: '17-07-2017T03:34', card_last_four: '6051' },
    { amount: 1345.98, date: '22-06-2017T10:33', card_last_four: '0059' },
    { amount: 2850.70, date: '27-01-2018T12:34', card_last_four: '4444' },
    { amount: 45.00, date: '10-02-2018T02:34', card_last_four: '0110' },
    { amount: 1.00, date: '17-02-2018T18:34', card_last_four: '1669' },
    { amount: 4.69, date: '01-02-2018T02:34', card_last_four: '8488' },
    { amount: 1111.11, date: '15-01-2018T21:34', card_last_four: '9912' }
  ]
},
  methods: {
    query() {
      let searcherEl= document.getElementById('searcher')
      this.activeSearch = searcherEl.value.toLowerCase()
      this.processData()
    },
    sort() {
      let self = this

      self.transactions = self.transactions.sort((a, b) => {
        let dateA = self.createDate(a.date)
        let dateB = self.createDate(b.date)
        return dateA - dateB
      })
    },
    search() {
      let self = this
      if(self.activeSearch !== '') {
        self.transactions = self.transactions.filter((elem) => {
            return elem.amount.toString().includes(self.activeSearch) ||
              elem.card_last_four.includes(self.activeSearch) ||
              elem.date.includes(self.activeSearch)
        })
      } else {
        self.transactions = [
          { amount: 112.98, date: '27-01-2018T12:34', card_last_four: '2544' },
          { amount: 0.45, date: '01-12-2017T9:36', card_last_four: '4434' },
          { amount: 95.99, date: '23-11-2017T14:34', card_last_four: '3011' },
          { amount: 7774.32, date: '17-07-2017T03:34', card_last_four: '6051' },
          { amount: 1345.98, date: '22-06-2017T10:33', card_last_four: '0059' },
          { amount: 2850.70, date: '27-01-2018T12:34', card_last_four: '4444' },
          { amount: 45.00, date: '10-02-2018T02:34', card_last_four: '0110' },
          { amount: 1.00, date: '17-02-2018T18:34', card_last_four: '1669' },
          { amount: 4.69, date: '01-02-2018T02:34', card_last_four: '8488' },
          { amount: 1111.11, date: '15-01-2018T21:34', card_last_four: '9912' }
        ]
      }
    },
    processData() {
      this.search()
      this.sort()
    },
    createDate(dateString) {
      let slices = dateString.split('T')
      let dateSlices = slices[0].split('-')
      let hourSlices = slices[1].split(':')

      let date = new Date(dateSlices[2], dateSlices[1], dateSlices[0], hourSlices[0], hourSlices[1])

      return date
    }
  },
  created() {
    this.sort()
  }
});