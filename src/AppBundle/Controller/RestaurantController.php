<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\FOSRestController;

/**
 * @Route(defaults={"_format": "json"})
 */
class RestaurantController extends FOSRestController
{
    /**
     * @Route("/restaurants/index", name="restaurants-index")
     */
    public function indexAction()
    {
        $restaurants = array( array('name' => 'Hendy') );
        $view = $this->view($restaurants, 200);

        return $this->handleView($view);
    }
}
