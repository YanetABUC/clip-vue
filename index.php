<html class="ie ie9 lte9" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="robots" content="all">
    <title>Clip Test - Using Vue</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css" type="text/css">
<body>
<div class="container gap-top-m" id="vcontainer">
    <h1>List of transactions</h1>

    <div class="search-box gap-top-m">
        <input id="searcher" type="text" placeholder="Search..." v-on:keyup="query">
        <span class="icon-search addon"></span>
    </div>

    <div class="list-container">
        <div class="row header">
            <div class="col-sm-4">Date</div>
            <div class="col-sm-4">Amount</div>
            <div class="col-sm-4">Card Last Four</div>
        </div>
        <div class="row row-elem" v-for="item in transactions">
            <div class="col-sm-4">{{item.date}}</div>
            <div class="col-sm-4">{{item.amount}}</div>
            <div class="col-sm-4">{{item.card_last_four}}</div>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
<script src="js/vue.min.js"></script></head>
<script src="js/main.js"></script></head>
</body>
</html>