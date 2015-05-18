@extends('layouts.admin')

@section('pannel')


<div id="page-wrapper">

    <div class="container-fluid">
        @foreach($projects as $project)
            <p>{{$project}}</p>
        @endforeach
    </div>

</div>
@stop


