<?php

class AdminController extends BaseController {

    public function login() {
        if (Request::isMethod('post'))
        {
            echo 'POST';
        }

        return View::make('admin/login');
    }

    public function home(){

        return View::make('admin/home');
    }

    public function listProjects(){

        if (Request::isMethod('post'))
        {
            echo 'POST';
        }
        $projects = Project::all();

        return View::make('admin/listProjects', array('projects' => $projects));
    }

    public function addProject(){

        if (Request::isMethod('post'))
        {
            $projet = Project::create([
                'name' => 'projet test',
                'description' => 1,
                'url' => 'nouvel url'
            ]);
        }

        return View::make('admin/addProject');
    }

}