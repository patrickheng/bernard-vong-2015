<?php

class Project extends Eloquent {

    protected $table = 'project';
    protected $guarded = array('id');
    protected $hidden = array('showProject', 'created_at', 'updated_at');

}