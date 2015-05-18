@extends('app.views.layouts.html')


@section('header')
    <link rel="stylesheet" href="{{asset('css/login.css')}}"/>
@stop

@section('body')
    {{ Form::open(array('url' => '')) }}

        <h2 class="col-md-offset-5">Connexion</h2>

        // A FINIR ( alert mauvais ID )
        @if(1 === 1)
        {
            <div class="alert alert-danger col-sm-10 col-md-offset-1" role="alert">
                <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span class="sr-only">Error:</span>
                Enter a valid email address
            </div>
        }
        <div class="input-group col-md-3 col-md-offset-5">
            <span class="input-group-addon" id="basic-addon1">Username</span>
            {{ Form::text('username', null, array('class' => 'form-control', 'aria-describedby' => 'basic-addon1' )) }}
        </div>

        <br/>
        <div class="input-group col-md-3 col-md-offset-5">
            <span class="input-group-addon" id="basic-addon1">Password</span>
            {{ Form::password('password', array('class' => 'form-control',  'aria-describedby' => 'basic-addon1')) }}
        </div>

         <br/>
        {{ Form::submit('Envoyer !', array('class' => 'btn btn-primary col-md-offset-5')) }}

    {{ Form::close() }}

@stop