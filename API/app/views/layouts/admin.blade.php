<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Bernard VONG">
    <link rel="stylesheet" href="{{asset('bower/bootstrap/dist/css/bootstrap.css')}}"/>
    <link rel="stylesheet" href="{{asset('bower/bootstrap/dist/css/admin-dist.css')}}"/>
    <title>Panneau d'administration</title>

</head>

<body>
    <div id="wrapper">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <a class="navbar-brand" href="{{URL::to('admin')}}">Portfolio</a>
            </div>
            <!-- Top Menu Items -->
            <ul class="nav navbar-right top-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> Bernard Vong <b
                                class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="{{URL::to('/')}}">Retourner au site</a>
                        </li>
                        <li>
                            <a href="{{URL::to('/admin/disconnect')}}"><i class="fa fa-fw fa-power-off"></i> Deconnexion</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li class="active">
                        <a href="{{URL::to('/admin/')}}"><i class="fa fa-fw fa-dashboard"></i>Home</a>
                    </li>
                    <li>
                        <a href="{{URL::to('/admin/listProjects')}}"><i class="fa fa-fw fa-dashboard"></i>Liste des projets</a>
                    </li>
                    <li>
                        <a href="{{URL::to('/admin/addProject')}}"><i class="fa fa-fw fa-dashboard"></i>Ajouter un projet</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        @section('pannel')

        @show
    </div>

    <link href="{{ asset('bower/jquery/dist/jquery.js') }}" rel="text/javascript">
    <link href="{{ asset('bower/bootstrap/dist/js/bootstrap.js') }}" rel="text/javascript">

    <script>
        // Open nav bar list
        var dropdownButtons = document.getElementsByClassName('dropdown-toggle');
        for(var i = 0; i<dropdownButtons.length; i++)
        {
            dropdownButtons[i].addEventListener('click', addOpenClass);
        }

        function addOpenClass()
        {
            var parent = this.parentNode;
            if(parent.getAttribute('class') == 'dropdown')
                parent.setAttribute('class', 'dropdown open');
            else
                parent.setAttribute('class', 'dropdown');
        }

    </script>


</body>

</html>